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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlua3lzYXVydXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmlua3lzYXVydXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRztBQUVILG9EQUFvRDtBQUNwRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFbEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUM7SUFDdEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsWUFBWSxFQUFFLElBQUk7Q0FDckIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ2pCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFOUMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUVuRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLHdEQUF3RDtJQUN4RCxxRUFBcUU7SUFDckUsMkNBQTJDO0lBQzNDLE1BQU07SUFFTixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUMifQ==