export interface UserData {
    id: number;
    name: string;
    registered: string;
    role: string;
    status: string;
    _props?: { color?: string; align?: string };
    _cellProps?: Record<string, any>;
    _selected?: boolean;
  }
const usersData: UserData[] = [
  {id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
  {id: 1, name: 'Samppa Nori', registered: '2022/01/31', role: 'Member', status: 'Active', _props: { color: 'success', align: 'middle' },},
  {id: 2, name: 'Estavan Lykos', registered: '2022/02/01', role: 'Staff', status: 'Banned', _cellProps: { 'name': { color: 'info', active: true }}},
  {id: 3, name: 'Chetan Mohamed', registered: '2022/02/01', role: 'Admin', status: 'Inactive', _cellProps: { _all: { color: 'danger'}, role: { active: true }}},
  {id: 4, name: 'Derick Maximinus', registered: '2022/03/01', role: 'Member', status: 'Pending', _selected: true },
  {id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/07', role: 'Member', status: 'Active'},
  {id: 7, name: 'Avram Tarasios', registered: '2022/02/08', role: 'Staff', status: 'Banned'},
  {id: 8, name: 'Quintin Ed', registered: '2022/02/01', role: 'Admin', status: 'Inactive'},
  {id: 9, name: 'Enéas Kwadwo', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active'},
  {id: 12, name: 'Nehemiah Tatius', registered: '2022/02/11', role: 'Staff', status: 'Banned'},
  {id: 13, name: 'Ebbe Gemariah', registered: '2022/02/08', role: 'Admin', status: 'Inactive'},
  {id: 14, name: 'Eustorgios Amulius', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 16, name: 'Pompeius René', registered: '2022/01/10', role: 'Member', status: 'Active'},
  {id: 17, name: 'Paĉjo Jadon', registered: '2022/02/01', role: 'Staff', status: 'Banned'},
  {id: 18, name: 'Micheal Mercurius', registered: '2022/02/11', role: 'Admin', status: 'Inactive'},
  {id: 19, name: 'Ganesha Dubhghall', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active'},
  {id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/14', role: 'Staff', status: 'Banned'},
  {id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending'},
  {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!', _cellProps: { role: { active: true }}}
]
export default usersData