import { create } from "zustand";
import { ModalState, TypeSalary } from "./interface-modal";

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useTypeStore = create<TypeSalary>((set) => ({
  type: "",
  setType: (value: string) => set({ type: value }),
}));
