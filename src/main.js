import base from './base.js'
import matching from './matching.js'

import _ from 'lodash-es'
import { eachDeep } from 'deepdash-es/standalone'
import { writeFile } from 'fs'




let snippet = {}
eachDeep(
    base,
    (value, key, parent, ctx) => {

        let css = []
        let description = []
        let prefix = []
        if (ctx?._item?.parent?.path) {
            // console.log(ctx?._item?.parent?.path)
            ctx?._item?.parent?.path.map(item => {
                // console.log(item)
                const match = matching[item]
                if (match?.css) {
                    css = [...css, ...match.css]
                    description = [...description, match.description]
                    prefix = [...prefix, match.prefix]
                }
            })
        }
        // if (ctx._item?.key) {
        const matchItem = matching[ctx._item.key]
        if (matchItem !== undefined) {

            css = [...css, ...matchItem?.css]


            description = [...description, matchItem?.description]
            prefix = [...prefix, matchItem.prefix]

            let descriptionSting = _.replace(description.toString(), /\,/g, ' ')
            if (description[0] !== undefined) {
                snippet[descriptionSting] = {
                    ...snippet[descriptionSting], prefix: _.replace(prefix.toString(), /\,/g, '')
                }
                snippet[descriptionSting] = {
                    ...snippet[descriptionSting], description: _.replace(description.toString(), /\,/g, ' ')
                }
                snippet[descriptionSting] = {
                    ...snippet[descriptionSting], body: css
                }
            }
        }
        // snippet[...description].body = css
    }, { includeRoot: true, pathFormat: 'array' }
);

writeFile("snippets/snippets.code-snippets", JSON.stringify(snippet), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});


// console.log(snippet)