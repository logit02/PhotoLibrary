import { Pipe, PipeTransform } from '@angular/core';
import {CORE_TEXTS} from "../../../assets/texts/core-texts";

@Pipe({
  name: 'translateFromJson'
})
export class TranslateFromJsonPipe implements PipeTransform {

  transform(value: string): string {
    return CORE_TEXTS.find(text => text.lookupKey === value)?.translations.find(translation => translation.lang === 'en')?.title ?? '';
  }

}
