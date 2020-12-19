import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import app from '@server';
import User from '@entities/User';
import { API_V2 } from '@shared/constants';



describe('API v2', () => {

    const v2_parse_url = `${API_V2}parse`;

    const { BAD_REQUEST, CREATED, OK } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"POST:${v2_parse_url}"`, () => {

        it(`should return a JSON object with parsed first name, last name, clientId and a status code of "${OK}" if the
            request was successful.`, (done) => {
            // Setup spy
            const exprected_result = {
              "firstName": "JOHNNY",
              "lastName": "CARSON",
              "clientId": "888-1234"
          }
            // Call API
            agent.post(v2_parse_url).send({
              "data": "JOHNNY000000000CARSON0008881234"
            }).end((err: Error, res) => {
                    
                    expect(res.status).toBe(OK);
                    // Caste instance-objects to 'User' objects
                    const respUsers = res.body;
                    
                    expect(respUsers).toEqual(exprected_result);
                    // expect(res.body.error).toBeUndefined();
                    done();
                });
        });

    
    });

    
});
