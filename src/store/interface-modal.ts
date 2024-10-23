export interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface TypeSalary {
  type: string;
  setType: (value: string) => void;
}
