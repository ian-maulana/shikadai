import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppColor, AppSize } from '@components/Theme/config';
import Layout from '@layouts/Main';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';

export default function Index() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Box sx={{ padding: AppSize.s16 }}>
            <h1>Register</h1>
            <p>
              Use this endpoint to register new user. New user need for access
              our API.
            </p>

            <div>
              <span>POST</span> /onboard/register
            </div>

            <h2>Request Headers</h2>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Attributs</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Content-Type<span>*</span>
                  </td>
                  <td>Application/json</td>
                  <td>Response format as json</td>
                </tr>
                <tr>
                  <td>
                    access-token<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Token provided from get token request</td>
                </tr>
              </tbody>
            </table>

            <h2>Request Body</h2>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Attributs</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    username<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Unique Identifier for json</td>
                </tr>
                <tr>
                  <td>
                    name<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Full name for user</td>
                </tr>
                <tr>
                  <td>
                    email<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Email address</td>
                </tr>
              </tbody>
            </table>

            <h2>Response</h2>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Attributs</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    name<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Full name for user</td>
                </tr>
                <tr>
                  <td>
                    email<span>*</span>
                  </td>
                  <td>string</td>
                  <td>Email address</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Grid>
        <Grid
          xs={5}
          sx={{
            backgroundColor: AppColor.secondary,
            color: AppColor.white,
            minHeight: '100vh',
            marginTop: '8px',
          }}
        ></Grid>
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
