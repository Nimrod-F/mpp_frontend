import { create } from "zustand";
import Dog from "../model/Dog";
import { DogList } from "../service/DogApi";

interface useDogStoreProps {
  opened: boolean;
  handleOpen: (dog?: Dog) => void;
  handleClose: () => void;
  dogs: Dog[];
  deleteDog: (dogId: number) => void;
  addDog: (dog: Dog) => void;
  selectedDog: Dog;
  editDog: (dog: Dog) => void;
}

const useDogStore = create<useDogStoreProps>((set) => ({
  opened: false,
  selectedDog: {} as Dog,
  handleOpen: (dog?: Dog) => set({ opened: true, selectedDog: dog }),
  editDog: (dog: Dog) => {
    set((state) => ({
      dogs: state.dogs.map((d) => (d.id === dog.id ? dog : d)),
    }));
  },
  handleClose: () => set({ opened: false, selectedDog: {} as Dog }),
  dogs: DogList,
  addDog: (dog: Dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
  deleteDog: (dogId: number) =>
    set((state) => ({ dogs: state.dogs.filter((d) => d.id !== dogId) })),
}));

export default useDogStore;
