import BasicLayout from 'layouts/BasicLayout';
import { ContentWrap } from 'components/common/styled/components';
import Table, { TableSizes } from 'components/common/Table';
import Tabs from 'components/common/Tabs';
import { TableWrap } from 'components/common/Table/styled/components';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { BossRespawnSchema } from 'utils/contentTypes';
import RecentAPI from 'api/recent';
import { infoTabs } from 'utils/tabs';

interface BossProps {
    data: Array<BossRespawnSchema>
    titles: Array<string>
}

export default function Bosses({ data = [], titles = []}: BossProps) {
    return (
        <BasicLayout>
            <ContentWrap>
                <Tabs tabs={infoTabs} />
                <TableWrap>
                    <Table data={data} titles={titles} size={TableSizes.COMMON}/>
                </TableWrap>
            </ContentWrap>
        </BasicLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
        let data: BossProps = await RecentAPI.getBossRespawns();
        return { props: data };
    } catch(error) {
        console.log(error)
        return {
            props: { data: [] },
            redirect: '/500'
        }
    }
}