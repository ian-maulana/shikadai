import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Layout from '@layouts/Main';
import Grid from '@mui/system/Unstable_Grid';
import { AppColor, AppSize } from '@components/Theme/config';
import Box from '@mui/system/Box';

export default function Index() {
  const { t } = useTranslation('common');

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Box sx={{ padding: AppSize.s16 }}>
            <h1>{t('introductionLabel')}</h1>
            <p>
              These docs will guide you through integrating with opennote and
              demonstrate how to use our product.
            </p>
            <p>
              In addition to these docs, you can also find helpful information
              about integrating with opennote in our <a href="#">Help Center</a>
              .
            </p>
            <p>The docs are organized into six main groups:</p>
            <ol>
              <li>Registration</li>
              <li>Authentication</li>
              <li>Get all notes</li>
              <li>Get note by id</li>
              <li>Create note</li>
              <li>Update note</li>
              <li>Delete note</li>
            </ol>
          </Box>
        </Grid>
        <Grid
          xs={4}
          sx={{
            backgroundColor: AppColor.secondary,
            color: AppColor.white,
            minHeight: '100vh',
            marginTop: '8px',
          }}
        >
          <Box component="p" sx={{ padding: AppSize.s16 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nemo
            doloribus consectetur ea modi iste praesentium totam, odio libero
            fuga esse neque veritatis optio tenetur! Consequuntur voluptatem
            recusandae quidem velit!
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});
