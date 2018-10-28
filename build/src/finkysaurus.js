"use strict";
/*
 * Copyright (c) 2018. Jeff Brannon
 * Website: https://piczelspydr.github.io/
 * Email: piczelspydr@gmail.com
 *
 * This file is part of finkysaurus
 * finkysaurus is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by  the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * finkysaurus is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with finkysaurus.  If not, see <https://www.gnu.org/licenses/>.
 */
let fs = require('fs');
let markdown = fs.readFileSync("D:/PiczelSpydr/Projects/finkysaurus/src/example.md", "utf8");
markdown = markdown.replace(/(#+)(.*)/g, '<h1>$2</h1>');
markdown = markdown.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
markdown = markdown.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
//const parseString = require('xml2js').parseString;
const convert = require('xml-js');
const StreamZip = require('node-stream-zip');
const zip = new StreamZip({
    file: 'Test.odt',
    storeEntries: true
});
zip.on('ready', () => {
    const data = zip.entryDataSync('content.xml');
    const result1 = convert.xml2json(data.toString(), { compact: true });
    const json = JSON.parse(result1);
    // parseString(data.toString(), function (err, result) {
    //     const jeff = result['office:document-content']['office:body'];
    //     console.dir(jeff[0]['office:text']);
    // });
    zip.close();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlua3lzYXVydXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmlua3lzYXVydXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRztBQUVILElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLG9EQUFvRCxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTdGLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM3RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUU3RCxvREFBb0Q7QUFDcEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDO0lBQ3RCLElBQUksRUFBRSxVQUFVO0lBQ2hCLFlBQVksRUFBRSxJQUFJO0NBQ3JCLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTlDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFFbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyx3REFBd0Q7SUFDeEQscUVBQXFFO0lBQ3JFLDJDQUEyQztJQUMzQyxNQUFNO0lBRU4sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDIn0=