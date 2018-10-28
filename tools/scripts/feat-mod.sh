TitleCaseConverter() {
    echo "-------------------------"
    NEW_CASE=`echo "$1" | sed -E 's/.*/\L&/; s/[a-z]*/\U&/g'`

    m=`echo "$1" | sed -E 's/.*/\L&/; s/[a-z]*/\U&/g' `;
    echo "${m}"
    echo "${NEW_CASE}";
}

echo "I worked $1";
echo "name - $(TitleCaseConverter $1)"
echo "-------------------------------"
# echo "\$1 - $(TitleCaseConverter "$1")"

# NAME = income
# STATE_NAME = IncomeState
# PATH = ./projects/$NAME
# API_PATH = ./projects/$NAME/src/public_api.ts
# REDUCER_PATH = ./projects/$NAME/src/lib/state/$NAME.reducer.ts
# LINT_PATH = ./projects/$NAME/tslint.json
# NG_PREFIX=lwc


# # Create Library
# ng g lib $NAME --spec=false --prefix=$NG_PREFIX

# # Cleanup Library
# rm projects/$NAME/src/lib/*.*
# sed -i '' -e '5,$d' $API_PATH


# # Create State Module
# ng g module state --spec=false --project=$NAME
# ng g entity state/$NAME  --flat=true --spec=false  --project=$NAME -m=state.module.ts
# ng g effect state/$NAME --spec=false  --project=$NAME -m=state/state.module.ts
# echo "export * from './lib/state/state.module';" > $API_PATH
# sed -i '' -e 's/ State / $STATE_NAME /g' $REDUCER_PATH


# # Create UI Module
# LIST_NAME=IncomeList
# ng g module ui --spec=false --project=$NAME
# ng g c ui/$LIST_NAME --spec=false --styleext=scss --project=$NAME -m=ui/ui.module.ts --export
# echo "export * from './lib/ui/ui.module';" > $API_PATH


# # Create Pages Module
# ng g module pages --spec=false --project=$NAME
# ng g container pages/$LIST_NAME --spec=false --styleext=scss --project=$NAME -m=pages.module.ts --state=../state/$NAME.reducer.ts --stateInterface=$STATE_NAME --export
# echo "export * from './lib/ui/ui.module';" > $API_PATH