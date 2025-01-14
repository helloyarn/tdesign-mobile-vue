import List from './list.vue';
import TPullRefresh from './pull-refresh.vue';
import { withInstall, WithInstallType } from '../shared';

import { TdListProps } from './type';
import './style';

export * from './type';
export type ListProps = TdListProps;

const _List: WithInstallType<typeof List> = withInstall(List);
export const PullRefresh: WithInstallType<typeof TPullRefresh> = withInstall(TPullRefresh);
export default _List;
