import BasicLayout from 'layouts/BasicLayout';
import { ContentWrap } from 'components/common/styled/components';
import Table, { TableSizes } from 'components/common/Table';
import Tabs from 'components/common/Tabs';
import Pagination from 'components/common/Pagination';
import Top3 from 'components/Top3';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { RankItemSchema } from 'utils/contentTypes';
import usePagination from 'hooks/usePagination';
import PagesAPI from 'api/pages';
import { infoTabs } from 'utils/tabs';

interface RankingsProps {
    data: Array<RankItemSchema>
    titles: Array<string>
}

export default function Rankings({ data = [], titles = []}: RankingsProps) {
    let [page, current, all, changePage] = usePagination(data, 20);

    return (
        <BasicLayout>
            <ContentWrap>
                <Tabs tabs={infoTabs}/>
                <Top3 players={data.slice(0, 3)} />
                <Table data={page} titles={titles} size={TableSizes.COMMON}/>
                <Pagination current={current} all={all} changePage={changePage} />
            </ContentWrap>
        </BasicLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    try {
        let data: RankingsProps = await PagesAPI.getRankList();
        return { props: data, revalidate: 60 * 60 };
    } catch(error) {
        return {
            props: { data: [] }
        }
    }
}