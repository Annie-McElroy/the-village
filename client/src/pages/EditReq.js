import React, { useState } from "react";
import EditReqForm from "../components/EditReqForm.js/index.js";
import SubmitReqBttn from "../components/SubmitReqBtn";
import BackMeUp from "../components/BackBtn/index.js";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_REQUEST } from "../utils/queries.js";
import { useQuery } from "@apollo/client";
import AuthService from "../utils/auth";
import Nav from "../components/Nav";

function EditRequest() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(QUERY_SINGLE_REQUEST, {
    variables: {
      id: id,
    },
  });

  const request = data?.request || {};

  const title = request.title;
  const desc = request.body;
  const crayon = request.crayons;

  return (
    <div>
      <BackMeUp />
      <div className="pageFrame">
        <h1>Villager's Request:</h1>
        <EditReqForm
          request={request}
          title={title}
          desc={desc}
          crayon={crayon}
          key={request._id}
        />
        <SubmitReqBttn />
      </div>
      {AuthService.loggedIn() && (
        <footer>
          <Nav />
        </footer>
      )}
    </div>
  );
}

export default EditRequest;
