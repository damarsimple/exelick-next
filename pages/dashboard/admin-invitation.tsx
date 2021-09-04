import { gql } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";
import AppContainer from "../../components/AppContainer";
import DashboardContainer from "../../components/DashboardContainer";
import Form from "../../components/Form";
import { InvitationOutput } from "../../types/type";

interface ModifiedInvitationOutput extends InvitationOutput {
  email: string;
}

export default function AdminInvitation() {
  return (
    <AppContainer>
      <DashboardContainer>
        <div>
          <Form<
            ModifiedInvitationOutput,
            { send_invitation: ModifiedInvitationOutput }
          >
            mutationQuery={gql`
              mutation {
                send_invitation(email: "damaralbaribin2@gmail.com") {
                  status
                  message
                }
              }
            `}
            attributes={[
              { label: "Email", name: "email", required: true, type: "email" },
            ]}
            fields={"send_invitation"}
            afterSubmit={(e) => {
              if (e.status) {
                toast.success("Berhasil mengirim undangan " + e.message);
              } else {
                toast.error("gagal mengirim undangan " + e.message);
              }
            }}
          />
        </div>
      </DashboardContainer>
    </AppContainer>
  );
}
