import { SWRConfiguration } from 'swr/dist/types';
import { TUseEvmSyncNftContractParams, TUseEvmSyncNftContractReturn } from './types'
import axios from 'axios'
import useSWR from 'swr';

export const useEvmSyncNFTContract = (params: TUseEvmSyncNftContractParams, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, params: any) => axios.post(`/api/moralis/${endpoint}`, params).then(res => res.data);

  const { data, error, mutate, isValidating } = useSWR<TUseEvmSyncNftContractReturn>(
    [`EvmApi/nft/syncNFTContract`, params],
    axiosFetcher,
    SWRConfig,
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};
