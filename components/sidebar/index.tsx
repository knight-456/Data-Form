import { AlertDialog } from '@/components/ui/alert-dialog';

import LgSideBarView from './lgSidebar';
import SmSideBarView from './smSidebar';

const Sidebar = () => {

    return (
        <AlertDialog>
            <div className="hidden md:flex">
                <LgSideBarView />
            </div>
            <div className="flex md:hidden">
                <SmSideBarView />
            </div>
        </AlertDialog>
    )
}

export default Sidebar;