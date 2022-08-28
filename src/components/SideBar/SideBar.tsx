import { ReactElement } from 'react'
import styles from './SideBar.module.scss'
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineFileAdd } from 'react-icons/ai';

const SideBar = () => {
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
    return (
        <div className={styles.container}>
            <p>Logo</p>
            <ul>
                {
                    ListItens.map((item, index) => (
                        <li key={index}>
                            <button>
                                {item.icon}
                                <span >{item.name}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default SideBar