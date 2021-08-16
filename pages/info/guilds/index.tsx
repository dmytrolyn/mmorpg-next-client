import BasicLayout from 'layouts/BasicLayout';
import { ContentWrap } from 'components/common/styled/components';
import Table, { TableSizes } from 'components/common/Table';
import Tabs from 'components/common/Tabs';
import { TableWrap } from 'components/common/Table/styled/components';
import Pagination from 'components/common/Pagination';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { GuildItemSchema } from 'utils/contentTypes';
import usePagination from 'hooks/usePagination';
import PagesAPI from 'api/pages';
import { infoTabs } from 'utils/tabs';

interface GuildsProps {
    data: Array<GuildItemSchema>
    titles: Array<string>
}

export default function Guilds({ data = [], titles = []}: GuildsProps) {
    let [page, current, all, changePage] = usePagination(data, 20);

    return (
        <BasicLayout>
            <ContentWrap>
                <Tabs tabs={infoTabs} />
                <TableWrap>
                    <Table data={page} titles={titles} size={TableSizes.COMMON}/>
                </TableWrap>
                <Pagination current={current} all={all} changePage={changePage} />
            </ContentWrap>
        </BasicLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    try {
        let data: GuildsProps = await PagesAPI.getGuildsList();
        return { props: data, revalidate: 60 * 60 };
    } catch(error) {
        return {
            props: { data: [] },
            redirect: '/500'
        }
    }
}