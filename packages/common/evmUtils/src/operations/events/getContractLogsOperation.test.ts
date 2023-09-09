import { Core } from '@moralisweb3/common-core';
import { EvmAddress, EvmChain } from '../../dataTypes';
import { GetContractLogsRequest, getContractLogsOperation } from './getContractLogsOperation';

describe('getContractLogsOperation', () => {
  let core: Core;

  beforeAll(() => {
    core = Core.create();
  });

  it('serializeRequest() serializes correctly and deserializeRequest() deserializes correctly', () => {
    const address = '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359';
    const chain = '0x10';
    const toDate = '2021-01-01T00:00:00.000Z';
    const fromDate = '2021-01-01T00:00:00.000Z';

    const request: Required<GetContractLogsRequest> = {
      chain: EvmChain.create(chain),
      toBlock: '123',
      fromBlock: '123',
      toDate: new Date(toDate),
      fromDate: new Date(fromDate),
      address: EvmAddress.create(address),
      limit: 100,
      topic0: 'topic0',
      blockNumber: '123',
      cursor: 'cursor',
    };

    const serializedRequest = getContractLogsOperation.serializeRequest(request, core);

    expect(serializedRequest.address).toBe(address);
    expect(serializedRequest.chain).toBe(chain);
    expect(serializedRequest.blockNumber).toBe(request.blockNumber);
    expect(serializedRequest.limit).toBe(request.limit);
    expect(serializedRequest.topic0).toBe(request.topic0);
    expect(serializedRequest.toBlock).toBe(request.toBlock);
    expect(serializedRequest.fromDate).toBe(fromDate);
    expect(serializedRequest.toDate).toBe(toDate);
    expect(serializedRequest.cursor).toBe(request.cursor);
    expect(serializedRequest.fromBlock).toBe(request.fromBlock);

    const deserializedRequest = getContractLogsOperation.deserializeRequest(serializedRequest, core);

    expect((deserializedRequest.address as EvmAddress).lowercase).toBe(address);
    expect((deserializedRequest.chain as EvmChain).apiHex).toBe(chain);
    expect(deserializedRequest.toBlock).toBe(request.toBlock);
    expect((deserializedRequest.fromDate as Date | undefined)?.toISOString()).toBe(fromDate);
    expect((deserializedRequest.toDate as Date | undefined)?.toISOString()).toBe(toDate);
    expect(deserializedRequest.limit).toBe(request.limit);
    expect(deserializedRequest.cursor).toBe(request.cursor);
    expect(deserializedRequest.topic0).toBe(request.topic0);
    expect(deserializedRequest.blockNumber).toBe(request.blockNumber);
    expect(deserializedRequest.fromBlock).toBe(request.fromBlock);
  });
});
