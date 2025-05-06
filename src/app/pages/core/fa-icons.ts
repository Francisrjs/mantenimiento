import { faMagnifyingGlass, faEdit, faTrash, faPlus, faEye, faWrench, faPenToSquare, faHammer, faBolt, faTimesSquare, faClock, faClinicMedical, faCheckCircle, faPause, faStarHalfStroke, faPlay, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const FAICONS = {
  search: faMagnifyingGlass,
  edit: faPenToSquare,
  delete: faTrash,
  add: faPlus,
  view: faEye,
  wrench: faWrench,
  hammer: faHammer,
  bolt: faBolt,
  timer: faClock,
  clock: faClock,
  check: faCheckCircle,
  pause: faPause,
  start: faStarHalfStroke,
  play: faPlay,
  userPlus: faUserPlus
};
export function getIconForTipo(tipo: string) {
  switch (tipo) {
    case 'Mecánica': return FAICONS.wrench;
    case 'Herrería': return FAICONS.hammer;
    case 'Eléctrica': return FAICONS.bolt;
    default:           return FAICONS.wrench;
  }
}