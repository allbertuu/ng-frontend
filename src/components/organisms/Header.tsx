import { Fragment } from 'react';
import { FunctionComponent } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
    List as BarsIcon,
    X as CloseIcon,
    SmileyWink as AvatarIcon,
} from 'phosphor-react';
import classNames from '@utils/classNames';
import useAuth from '@hooks/useAuth';
import { useRouter } from 'next/router';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const { signOut } = useAuth();
    const router = useRouter();

    const handleCurrentPage = (url: string) => url === router.route;

    const navigation = [
        {
            name: 'Tela inicial',
            href: '/home',
            current: handleCurrentPage('/home'),
        },
        {
            name: 'Transações',
            href: '/transactions',
            current: handleCurrentPage('/transactions'),
        },
        // {
        //     name: 'Realizar transação',
        //     href: '/transactions/create',
        //     current: false,
        // },
    ];

    return (
        <Disclosure as="nav" className="bg-black/90">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>

                                    {open ? (
                                        <CloseIcon
                                            size="1.5rem"
                                            className="block"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <BarsIcon
                                            size="1.5rem"
                                            className="block"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="text-2xl text-white font-bold">
                                        NG.CASH
                                    </h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'border-b-[2px] border-b-purple-600 text-white rounded-none'
                                                        : 'text-gray-300 hover:bg-purple-700 hover:text-white',
                                                    'px-3 py-1 rounded-md font-medium'
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-purple-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>

                                            <AvatarIcon
                                                size="2rem"
                                                color="#FFF"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Seu perfil
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        Configurações
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        onClick={signOut}
                                                        className={classNames(
                                                            active
                                                                ? 'bg-red-500 text-white'
                                                                : 'text-gray-700',
                                                            'block transition-colors px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Sair
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'border-b-[2px] border-b-purple-600 rounded-none text-white'
                                            : 'text-gray-300 hover:bg-purple-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
