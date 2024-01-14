import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';

export default defineConfig({
    plugins: [pluginPreact()],
    server: {
        port: 1420,
        strictPort: true,
    },
    tools: {
        rspack: {
            watchOptions: {
                ignored: "**/src-tauri/**"
            }
        }
    }
});