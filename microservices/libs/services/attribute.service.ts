import { getCustomRepository } from "typeorm";
import { map, filter, keys, contains, difference, pickAll, merge } from "ramda";
import { AttributeRepository } from "../repositories";
import { setValueFrom, insertExtensions, mapKeys, capitalize } from "../function-utilities";
import { EntityContext, Attribute, ValueType } from "../domain-entities";

export class AttributeService {
  private attributeRepo = getCustomRepository(AttributeRepository);
  private processAttributeForDB(entityContext:EntityContext, attrObj) {
    //holder for new attributes
    let attributes = [];

    //Process the incoming attributes
    const createAttributes = key => {

      const value = attrObj[key];
      const type = capitalize(typeof value)

      const obj = Object.assign(new Attribute(), {
        name: key,
        value: setValueFrom(ValueType[type], value),
        valueType: ValueType[type],
        context: {
          scope: entityContext.scope,
          entity: entityContext.entity
        }
      });

      attributes.push(obj)
      return 'transformed';
    }

    mapKeys(createAttributes, attrObj);

    //Return 
    return attributes;
  }

  private processAttributes(attributes:Array<Attribute>, attributeFoundation:object = {}) {
    return insertExtensions(attributeFoundation, attributes);
  }

  /**
   * 
   * @param params 
   ```
   params = {
     propertyForName: value(string|boolean|array|object|number)
   }
   ---
   {
    email: "email@example.com"
   }
   ```
   */
  async saveAttributes(entityContext:EntityContext, params) {
    try {
      const attributesForDB = this.processAttributeForDB(entityContext, params);
      const attributes = await this.attributeRepo.saveAttributes(attributesForDB);
      return this.processAttributes(attributes);
    } catch(err) {
      return err;
    }
  }


    /**
   * 
   * @param params 
   ```
   params = {
     propertyForName: value(string|boolean|array|object|number)
   }
   ---
   {
    email: "email@example.com"
   }
   ```
   */
  async updateAttributes(entityContext:EntityContext, params) {
    const currentAttributes = await this.getRawAttributes(entityContext);
    const currentAttributeKeys = keys(this.processAttributes(currentAttributes))
    const incomingAttributeKeys = keys(params);
    const attributesToUpdate = filter(
      p => contains(p['name'], incomingAttributeKeys),
      currentAttributes
    );
    const newAttributesKeys = difference(incomingAttributeKeys, currentAttributeKeys);

    const updateAttributes = map(
      a => {
        const valueType = capitalize(typeof params[a['name']])
        return {
          ...a,
          value: setValueFrom(ValueType[valueType] ,params[a['name']]),
          valueType: ValueType[valueType]
        }
      },
      attributesToUpdate
    ) as Array<Attribute>;

    const newAttributesToSave = pickAll(newAttributesKeys as any, params);
  
    const updatedAttributes = await this.attributeRepo.saveAttributes(updateAttributes);
    const newAttributes = await this.saveAttributes(entityContext, newAttributesToSave)

    return {...this.processAttributes(updatedAttributes), ...newAttributes };
  }
  


  /**
   * Returns processed attributes for entityContext
   * 
   * @param entityContext 
   * @param attributeFoundation Object to apply processed attributes to. defaults to empty object
   */
  async getAttributes(entityContext:EntityContext, attributeFoundation?:object) {
    try {
      const attributes = await this.attributeRepo.getAttributes(entityContext);
      return this.processAttributes(attributes, attributeFoundation);
    } catch(err) {
      return err;
    }
  }


  /**
   * Returns raw attributes for entityContext
   * 
   * @param entityContext 
   */
  async getRawAttributes(entityContext:EntityContext) {
    try {
      const attributes = await this.attributeRepo.getAttributes(entityContext);
      return attributes;
    } catch(err) {
      return err;
    }
  }
}