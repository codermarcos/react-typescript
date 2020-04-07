export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}

export interface CepState {
  address: Address;
}

export enum CepActionType {
  fetch = 'fetch',
  save = 'save',
}


export interface FetchCepAction {
  type: CepActionType.fetch;
  cep: string;
}

export interface SaveCepAction {
  type: CepActionType.save;
  payload: {
    address: Address;
  };
}

export type CepActionTypes = FetchCepAction | SaveCepAction;
