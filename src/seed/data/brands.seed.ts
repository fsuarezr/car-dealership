import { v4 as uuid } from "uuid"
import { Brand } from "src/brands/entities/brand.entity"

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: `Audi`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: `BMW`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: `Ferrari`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: `Jaguar`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: `Mercedes-Benz`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: `Porsche`,
    createdAt: new Date().getTime(),
  },
]
