import path from 'path';
import { BuildEnv } from './configs/webpack/types/config';
import { buildWebpackConfig } from './configs/webpack/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:5000';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: env.port,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
