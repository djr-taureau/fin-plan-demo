import { classes as sendgrid } from '@sendgrid/helpers';
import { getContentMimeType } from '../function-utilities';
import { EmailData } from '@sendgrid/helpers/classes/email-address';
import { AttachmentData } from '@sendgrid/helpers/classes/attachment';

//Services
import { TemplatesService } from './templates.service';

export interface mailBoilerplate {
  to: EmailData | EmailData[],
  from: EmailData,
  subject: string,
  cc?: EmailData | EmailData[],
  bcc?: EmailData | EmailData[],
  attachments?: AttachmentData[] //content prop is base64 encoded string
}

/**
 * Formats the API object to send to SendGrid function binding output
 */
export class MailService {
  private mail = new sendgrid.Mail();
  private templateService = new TemplatesService();
  
  /**
   * Sets the base data needed for sending email 
   * 
   * @param boilerplate mailBoilerplate interface
   */
  private base(boilerplate:mailBoilerplate) {
    this.mail.addTo(boilerplate.to, boilerplate.cc, boilerplate.bcc);
    this.mail.setFrom(boilerplate.from);
    this.mail.setSubject(boilerplate.subject);
    this.mail.setAttachments(boilerplate.attachments);
  }




  /**
   * Returns API object for a simple plain text email
   * 
   * This is intended to be used for very minimal emails that you pass content to directly
   * 
   * @param boilerplate mailBoilerplate interface
   * @param content plain text string of email body
   */
  basicPlainText(boilerplate:mailBoilerplate, content:string) {
    this.base(boilerplate);
    this.mail.addTextContent(content);

    return this.mail;
  }


  /**
   * Return API object for a simple html email
   * 
   * This is intended to be used for very minimal emails that you pass html content to directly
   * 
   * @param boilerplate mailBoilerplate interface
   * @param content html string of email body
   */
  basicHtml(boilerplate:mailBoilerplate, content:string) {
    this.base(boilerplate);
    this.mail.addHtmlContent(content);

    return this.mail;
  }


  /**
   * Implements the template service for basic system emails from the content service.
   * 
   * @param boilerplate mailBoilerplate interface
   * @param template template name {virtual blob path} + {filename.ext}
   * @param templateData optional template data object to hydrate email object keys must exist in template as {{replacementTag}}
   */
  async systemEmailTemplate(boilerplate:mailBoilerplate, template:string, templateData?:object) {
    const content = await this.templateService.getSystemTemplate(template, templateData);

    this.base(boilerplate);
    if(getContentMimeType(template) === 'text/html') {
      this.mail.addHtmlContent(content);
    } else {
      this.mail.addTextContent(content);
    }
    
    return this.mail;
  }

}