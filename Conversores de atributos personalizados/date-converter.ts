import {ComplexAttributeConverter} from 'lit';

//el valueatributo también establece la valuepropiedad, por lo que puede establecer
// un valor predeterminado para su entrada desde el marcado estático
export const dateConverter: ComplexAttributeConverter<Date> = {
  toAttribute: (date: Date) => {
    return date.toString();
  },
  fromAttribute: (value: string) => {
    return new Date(value);
  }
};