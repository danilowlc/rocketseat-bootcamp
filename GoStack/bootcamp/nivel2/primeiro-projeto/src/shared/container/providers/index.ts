import {container} from 'tsyringe';

import IStorageProvider from './storageProvider/models/IStorageProvider';
import DiskStorageProvider from './storageProvider/implementations/DiskStorageProvider';

// import IMailProvider from './mailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>('StorageProvider', DiskStorageProvider);
// container.registerSingleton<IMailProvider>('MailProvider', );
