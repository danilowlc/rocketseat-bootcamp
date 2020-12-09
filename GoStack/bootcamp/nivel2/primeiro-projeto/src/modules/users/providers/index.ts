import {container} from 'tsyringe';

import IHashProvider from '../providers/hashProvider/models/IHashProvider';
import BCryptHashProvider from '../providers/hashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
