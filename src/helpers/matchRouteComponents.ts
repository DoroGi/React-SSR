import { matchRoutes } from 'react-router-config';

export default (path, routes) => matchRoutes(routes, path).map(({ route }) => route.component)