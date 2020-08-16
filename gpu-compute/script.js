const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();

// Get a GPU buffer in a mapped state and an arrayBuffer for writing.
const [gpuBuffer, arrayBuffer] = device.createBufferMapped({
  size: 4,
  usage: GPUBufferUsage.MAP_WRITE
});

// Write bytes to buffer.
new Uint8Array(arrayBuffer).set([0, 1, 2, 3]);
