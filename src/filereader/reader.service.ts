import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from 'lodash';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileReaderService {
  constructor() {
    this.readFile('a.txt').then(console.log);
  }
  public async readFile(path: string) {
    const result = readFileSync(join(__dirname, '../../data', path));
    return result.toString();
  }
  public async readCsvToJSON(path: string) {
    const result = readFileSync(join(__dirname, '../../data', path));
    const lines = result.toString().replace(/\"/g, '').split('\n');

    const headers = lines[0].split(',');
    const data: { [key in string]: number | string }[] = [];
    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i + 1];
      const values = line.split(',');
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      data.push(obj);
    }

    const rr = _(data)
      .groupBy()
      .map((g) => {
        return {
          key: g[0].county,
          value: g.map((d, i) => ({
            x: i,
            y: Number(d.tiv_2012),
          })),
        };
      })
      .take(2)
      .value();

    writeFileSync(
      __dirname + '../../output/data.json',
      JSON.stringify(rr, null, 2),
    );

    return data;
  }
}
