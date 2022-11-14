import { Fragment, useMemo } from 'react';
import Link from 'next/link';

import Menu from '@entities/Menu';

import { Aside, List, ListHead, ListItem } from './styles';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const menus: Array<any> = useMemo(() => {
    const data = [
      {
        id: '1',
        label: 'Introduction',
        path: '/',
        group: {
          id: '1.1',
          label: 'Welcome',
          description: 'Welcome',
        },
      },
      {
        id: '2',
        label: 'Register',
        path: '/register',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '3',
        label: 'Authentication',
        path: '/auth',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '4',
        label: 'Get All Note',
        path: '/get-all-notes',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '5',
        label: 'Get Note By Id',
        path: '/get-note-by-id',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '6',
        label: 'Create Note',
        path: '/create-note',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '7',
        label: 'Update Note',
        path: '/update-note',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
      {
        id: '8',
        label: 'Delete Note',
        path: '/delete-note',
        group: {
          id: '2.1',
          label: 'Reference',
          description: 'Reference',
        },
      },
    ];

    const result = data.reduce((acc: any, menu: Menu, index: number) => {
      const exist = acc.some((item: any) => item.group === menu.group.label);

      if (exist === false) {
        const children = data.filter((item) => {
          return item.group.label === menu.group.label;
        });

        acc[index] = {
          id: menu.id,
          group: menu.group.label,
          children: children,
        };
      }

      return acc;
    }, []);

    return result;
  }, []);

  return (
    <>
      <Aside>
        <List>
          {(menus || []).map((menu) => (
            <Fragment key={menu.id}>
              <ListItem>
                <ListHead>{menu.group}</ListHead>
              </ListItem>
              <List>
                {(menu.children || []).map((child: any, index: number) => (
                  <Fragment key={index}>
                    <ListItem>
                      <Link href={child.path}>{child.label}</Link>
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            </Fragment>
          ))}
        </List>
      </Aside>
    </>
  );
};

export default Sidebar;
