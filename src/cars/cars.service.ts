import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { v4 as uuid } from "uuid"
import { Car } from "./interfaces/car.interfaces"
import { CreateCarDto, UpdateCarDto } from "./dto/index"

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: `Toyota`,
    //   model: `Corolla`,
    // },
  ]

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id)

    if (!car) throw new NotFoundException(`Car with id:${id} not found`)

    return car
  }

  createCar(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    }

    this.cars.push(newCar)

    return newCar
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id)

    if (updateCarDto.id && updateCarDto.id != id)
      throw new BadRequestException(
        `You can not update a distinct id above the specified id in params`,
      )

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id }
        return carDB
      }

      return car
    })

    return carDB
  }

  deleteCar(id: string) {
    this.findOneById(id)

    const indexCar = this.cars.findIndex((car) => car.id === id)
    this.cars.splice(indexCar, 1)

    // this.cars = this.cars.filter((car) => car.id !== id) --> Alternative

    return `The car with id: ${id} was deleted succesfully`
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars
  }
}
