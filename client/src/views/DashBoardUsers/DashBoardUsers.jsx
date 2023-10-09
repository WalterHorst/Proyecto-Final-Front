import { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import "./DashBoard.modules.css";
import { getAllUsers } from "../../redux/Actions/Users/usersActions";
import { useDispatch, useSelector } from "react-redux";
import FormUser from "../../components/FormUser/FormUser";
import FormUserDel from "../../components/FomUserDel/FomUserDel";
import FormUserEdit from "../../components/FomUserEdit/FomUserEdit";

const DashBoardUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    if (users.length == 0) {
      dispatch(getAllUsers());
      console.log("users: ", users);
    }
  }, [dispatch]);

  const [selected, setSelected] = useState({});
  const [modalIns, setModalIns] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDel, setModalDel] = useState(false);

  const userSelect = (record, option) => {
    if (option === "Edit") {
      setSelected(record);
      handleModalEdit();
    } else {
      setSelected(record);
      handleModalDel();
    }
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "email",
    },
    {
      title: "Activo",
      dataIndex: "active",
      key: "active",
      render: (active) => (active ? "Activo" : "Inactivo"),
    },

    {
      title: "Action",
      key: "actions",
      render: (record) => (
        <>
          <Button onClick={() => userSelect(record, "Edit")}>
            <EditFilled className="icon" />
          </Button>
          <Button
            className="buttonTrash"
            onClick={() => userSelect(record, "Del")}
          >
            <DeleteFilled className="icon" />
          </Button>
        </>
      ),
    },
  ];

  const handleModalIns = () => {
    setModalIns(!modalIns);
  };

  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  const handleModalDel = () => {
    setModalDel(!modalDel);
  };
  console.log(users);
  return (
    <div className="dashBoard">
      <Button type="primary" className="buttonInsert" onClick={handleModalIns}>
        Nuevo
      </Button>
      <Table columns={columns} dataSource={users}></Table>

      <Modal
        visible={modalIns}
        destroyOnClose={true}
        onCancel={handleModalIns}
        centered
        // footer={[
        //   <Button key={0} onClick={handleModalIns}>
        //     cancelar
        //   </Button>,
        //   <Button key={1} onClick={handleModalIns}>
        //     Crear
        //   </Button>,
        // ]}
      >
        <FormUser />
      </Modal>
      <Modal
        visible={modalEdit}
        destroyOnClose={true}
        onCancel={handleModalEdit}
        centered
        okButtonProps={{ style: { display: "none" } }}
      >
        <FormUserEdit userEdit={selected} />
      </Modal>
      <Modal
        visible={modalDel}
        destroyOnClose={true}
        onCancel={handleModalDel}
        centered
        okButtonProps={{ style: { display: "none" } }}
      >
        <FormUserDel userEdit={selected} />
      </Modal>
    </div>
  );
};

export default DashBoardUsers;
