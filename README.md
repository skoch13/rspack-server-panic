# Rspack Dev Server - Orphaned Process Bug

Reproduction for https://github.com/web-infra-dev/rspack/issues/12629

## Bug

When running `pnpm --parallel -r dev` with multiple rspack dev servers, if one crashes, the other `rspack_node` processes are not killed and continue holding their ports.

## Reproduce

```bash
pnpm install
pnpm dev  # remote2 crashes immediately, orphaning host and remote1

# Ports 3000 and 3001 are still held by orphaned processes
pnpm dev  # Fails with EADDRINUSE

# Manual cleanup required
pkill -f rspack
```
