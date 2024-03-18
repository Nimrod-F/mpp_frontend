export default interface Dog {
  id: number;
  name: string;
  breed: DogBreed;
  description: string;
  imageUrl: string;
  age: number;
  owner: string;
}

export enum DogBreed {
  BICHON = "Bichon",
  LABRADOR = "Labrador",
  HUSKY = "Husky",
  PITBULL = "Pitbull",
}
