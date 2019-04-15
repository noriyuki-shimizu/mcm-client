import * as fs from 'fs';
import * as yaml from 'yaml';

/**
 * 設定ファイル読み込みに関するクラス。
 *
 * @export
 * @class Env
 */
export default class Env {

  private yamlPropertys: any;

  constructor() {
    console.log(fs);
    const appYml: string = fs.readFileSync('@/config/application.yaml', 'utf8');

    this.yamlPropertys = yaml.parse(appYml);
  }

  protected load(key: string): string {
    const filler: string = '.';

    if (key.indexOf(filler) >= 0) {
      const keyList: string[]  = key.split(filler);

      return this.scan(this.yamlPropertys, keyList.values());
    }

    return this.yamlPropertys[key];
  }

  private scan(yamlProperty: any, keyIterator: any): string {
    const next: {value: number; done: boolean} = keyIterator.next();

    if (next.done) {
      return yamlProperty;
    }

    return this.scan(yamlProperty[next.value], keyIterator);
  }

}
