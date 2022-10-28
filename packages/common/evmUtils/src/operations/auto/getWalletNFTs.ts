import { Core, Camelize, Operation, maybe } from '@moralisweb3/common-core';
import { EvmChain,EvmChainish,EvmAddress,EvmAddressish,EvmAddress,EvmAddressish, } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getWalletNFTs';

type PathParams = operations[OperationId]['parameters']['path'];

type QueryParams = operations[OperationId]['parameters']['query'];



type RequestParams = PathParams & QueryParams ;


type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export interface GetWalletNfTsRequest extends Camelize<Omit<RequestParams,  | 'chain' | 'token_addresses' | 'address'>> {
      chain?: EvmChainish;
      tokenAddresses?: EvmAddressish;
      address: EvmAddressish;
}

export type GetWalletNfTsJSONRequest = ReturnType<typeof serializeRequest>;

export type GetWalletNfTsJSONResponse = SuccessResponse;

export type GetWalletNfTsResponse = ReturnType<typeof deserializeResponse>;

export const GetWalletNfTsOperation: Operation<
  GetWalletNfTsRequest,
  GetWalletNfTsJSONRequest,
  GetWalletNfTsResponse,
  GetWalletNfTsJSONResponse
> = {
  method: 'GET',
  name: 'getWalletNFTs',
  id: 'getWalletNFTs',
  groupName: 'token',
  urlPathPattern: '/{address}/nft',
  urlPathParamNames: ['address',],
  urlSearchParamNames: ['chain','format','limit','tokenAddresses','cursor',],

  
  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods



function getRequestUrlParams(request: GetWalletNfTsRequest, core: Core) {
  return {
      chain: EvmChainResolver.resolve(request.chain, core).apiHex,
      format: request.format,
      limit: maybe(request.limit, String),
      token_addresses: EvmAddress.create(request.tokenAddresses, core).lowercase,
      cursor: request.cursor,
      address: EvmAddress.create(request.address, core).lowercase,
  };
}

function serializeRequest(request: GetWalletNfTsRequest, core: Core) {
  return {
      chain: EvmChainResolver.resolve(request.chain, core).apiHex,
      format: request.format,
      limit: request.limit,
      tokenAddresses: request.tokenAddresses.toString(),
      cursor: request.cursor,
      address: request.address.toString(),
  };
}

function deserializeRequest(
  jsonRequest: GetWalletNfTsJSONRequest,
  core: Core,
): GetWalletNfTsRequest {
  return {
      chain: EvmChain.create(jsonRequest.chain, core),
      format: jsonRequest.format,
      limit: jsonRequest.limit,
      tokenAddresses: EvmAddress.create(jsonRequest.tokenAddresses, core),
      cursor: jsonRequest.cursor,
      address: EvmAddress.create(jsonRequest.address, core),
  };
}

function deserializeResponse(jsonResponse: GetWalletNfTsJSONResponse, request: GetWalletNfTsRequest, core: Core) {
   return jsonResponse;
}
