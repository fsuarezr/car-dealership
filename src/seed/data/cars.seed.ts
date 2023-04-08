import { v4 as uuid } from "uuid"
import { Car } from "src/cars/interfaces/car.interfaces"

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: `Audi`,
    model: `Q3`,
  },
  {
    id: uuid(),
    brand: `BMW`,
    model: `BMW 4-SERIES 430I CONVERTIBLE 2020`,
  },
  {
    id: uuid(),
    brand: `Ferrari`,
    model: `California Convertible`,
  },
  {
    id: uuid(),
    brand: `Jaguar`,
    model: `F-Type Convertible`,
  },
  {
    id: uuid(),
    brand: `Mercedes-Benz`,
    model: `AMG GT Coupe 43`,
  },
  {
    id: uuid(),
    brand: `Porsche`,
    model: `911 Carrera`,
  },
]
