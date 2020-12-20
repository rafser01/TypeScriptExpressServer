import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import app from '@server';
import User from '@entities/User';
import { API_V1 } from '@shared/constants';



describe('API v1', () => {

    const v1_parse_url = `${API_V1}parse`;

    const { BAD_REQUEST, CREATED, OK } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"POST:${v1_parse_url}"`, () => {

        it(`should return a JSON object with parsed first name, last name, clientId and a status code of "${OK}" if the
            request was successful.`, (done) => {
            // Setup spy
            const exprected_result = {
              "firstName": "JOHNNY000000000",
              "lastName": "CARSON000",
              "clientId": "8881234"
          }
            // spyOn(, 'getAll').and.returnValue(Promise.resolve(users));
            // Call API
            agent.post(v1_parse_url).send({
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

    //     it(`should return a JSON object containing an error message and a status code of
    //         "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
    //         // Setup spy
    //         const errMsg = 'Could not fetch users.';
    //         spyOn(UserDao.prototype, 'getAll').and.throwError(errMsg);
    //         // Call API
    //         agent.get(getUsersPath)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(errMsg);
    //                 done();
    //             });
    //     });
    // });


    // describe(`"POST:${addUsersPath}"`, () => {

    //     const callApi = (reqBody: IReqBody) => {
    //         return agent.post(addUsersPath).type('form').send(reqBody);
    //     };

    //     const userData = {
    //         user: new User('Gordan Freeman', 'gordan.freeman@gmail.com'),
    //     };

    //     it(`should return a status code of "${CREATED}" if the request was successful.`, (done) => {
    //         // Setup Spy
    //         spyOn(UserDao.prototype, 'add').and.returnValue(Promise.resolve());
    //         // Call API
    //         agent.post(addUsersPath).type('form').send(userData)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(CREATED);
    //                 expect(res.body.error).toBeUndefined();
    //                 done();
    //             });
    //     });

    //     it(`should return a JSON object with an error message of "${paramMissingError}" and a status
    //         code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {
    //         // Call API
    //         callApi({})
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(paramMissingError);
    //                 done();
    //             });
    //     });

    //     it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
    //         if the request was unsuccessful.`, (done) => {
    //         // Setup spy
    //         const errMsg = 'Could not add user.';
    //         spyOn(UserDao.prototype, 'add').and.throwError(errMsg);
    //         // Call API
    //         callApi(userData)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(errMsg);
    //                 done();
    //             });
    //     });
    });

    // describe(`"PUT:${updateUserPath}"`, () => {

    //     const callApi = (reqBody: IReqBody) => {
    //         return agent.put(updateUserPath).type('form').send(reqBody);
    //     };

    //     const userData = {
    //         user: new User('Gordan Freeman', 'gordan.freeman@gmail.com'),
    //     };

    //     it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
    //         // Setup spy
    //         spyOn(UserDao.prototype, 'update').and.returnValue(Promise.resolve());
    //         // Call Api
    //         callApi(userData)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(OK);
    //                 expect(res.body.error).toBeUndefined();
    //                 done();
    //             });
    //     });

    //     it(`should return a JSON object with an error message of "${paramMissingError}" and a
    //         status code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {
    //         // Call api
    //         callApi({})
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(paramMissingError);
    //                 done();
    //             });
    //     });

    //     it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
    //         if the request was unsuccessful.`, (done) => {
    //         // Setup spy
    //         const updateErrMsg = 'Could not update user.';
    //         spyOn(UserDao.prototype, 'update').and.throwError(updateErrMsg);
    //         // Call API
    //         callApi(userData)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(updateErrMsg);
    //                 done();
    //             });
    //     });
    // });

    // describe(`"DELETE:${deleteUserPath}"`, () => {

    //     const callApi = (id: number) => {
    //         return agent.delete(deleteUserPath.replace(':id', id.toString()));
    //     };

    //     it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
    //         // Setup spy
    //         spyOn(UserDao.prototype, 'delete').and.returnValue(Promise.resolve());
    //         // Call api
    //         callApi(5)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(OK);
    //                 expect(res.body.error).toBeUndefined();
    //                 done();
    //             });
    //     });

    //     it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
    //         if the request was unsuccessful.`, (done) => {
    //         // Setup spy
    //         const deleteErrMsg = 'Could not delete user.';
    //         spyOn(UserDao.prototype, 'delete').and.throwError(deleteErrMsg);
    //         // Call Api
    //         callApi(1)
    //             .end((err: Error, res: IResponse) => {
    //                 pErr(err);
    //                 expect(res.status).toBe(BAD_REQUEST);
    //                 expect(res.body.error).toBe(deleteErrMsg);
    //                 done();
    //             });
    //     });
    // });
});
