import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineFileAdd } from 'react-icons/ai';
import SideBar from './SideBar';

describe('<SideBar />', () => {
    beforeEach(() => {
        render(
            <SideBar />
        );
    });

    it('should render itens of a list for menu', () => {
        interface Menu {
            name: string;
            icon: ReactElement;
        }
        const ListItens: Array<Menu> = [{
            name: 'Dashboard',
            icon: <MdOutlineDashboardCustomize />
        }, {
            name: 'Client Register',
            icon: <AiOutlineUserAdd />
        }, {
            name: 'Os Register',
            icon: <AiOutlineFileAdd />
        }]
        const listItems = screen.getAllByRole('button');

        expect(listItems).toHaveLength(ListItens.length);
    });

})
