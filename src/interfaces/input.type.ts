// inputs enum
export enum InputType {
  TODAY = "today",
  WEEK = "week",
  THIS_MONTH = "this_month",
  SIX_MONTHS = "six_months",
  YEAR_TO_DATE = "year_to_date",
  ONE_YEAR = "one_year",
  MAX = "max",
  PERSONALIZED = "personalized",
}

// filter enum
export enum FilterType {
  CLIENTS = "clients",
  TRANSACTIONS = "transactions",
  MONEY = "money",
  CASHBACK = "cashback",
}

// filters type
export const filters = [
  {
    label: "Clientes",
    value: FilterType.CLIENTS,
  },
  {
    label: "Transacciones",
    value: FilterType.TRANSACTIONS,
  },
  {
    label: "Dinero",
    value: FilterType.MONEY,
  },
  {
    label: "Cashback",
    value: FilterType.CASHBACK,
  },
];

// labels arrays

export const HOURS = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
export const WEEKS = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];

export const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

export const YTD = ["2023", "2024"];

export const YEAR = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export enum SwitchType {
  GRAPHIC = "Gráfico",
  PULSE = "Pulso"
}