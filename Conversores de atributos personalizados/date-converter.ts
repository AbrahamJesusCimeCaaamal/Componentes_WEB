import type {ComplexAttributeConverter} from 'lit';
//Un convertidor de atributos personalizado puede limpiar la implementación date-displayal proporcionar
// un medio para convertir un stringatributo en una Datepropiedad de objeto
export const dateConverter = (locale: string): ComplexAttributeConverter<Date> => {
  return {
//dateConverter debe devolver un objeto JavaScript con los siguientes métodos:
//toAttribute: una función que toma Datey devuelve una cadena.
//fromAttribute: una función que toma una cadena y devuelve un Date.
    toAttribute: (date: Date) => {
      return date.toLocaleDateString(locale);
    },
    fromAttribute: (value: string) => {
      return new Date(value);
    }
  }
};
