<?php defined('BASEPATH') or exit('No direct script access allowed');

class user extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_user');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_user->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'nom' => $row->nom, 'prenom' => $row->prenom, 'date_naissance' => $row->date_naissance);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_user->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'nom' => $row->nom, 'prenom' => $row->prenom, 'date_naissance' => $row->date_naissance);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $nom = strtoupper($this->input->post('nom'));
        $prenom = ucwords($this->input->post('prenom'));
        $date_naissance = $this->input->post('date_naissance');

        $data = array(
            'nom' => $nom,
            'prenom' => $prenom,
            'date_naissance' => $date_naissance,
        );

        $data = $this->Model_user->insert($data);

        echo json_encode(array("result" => true));
    }

    public function delete()
    {
        $id = $this->input->post('id');
        $this->Model_user->delete($id);
        $check = $this->Model_user->get_one($id);

        if ($check->num_rows() < 1) {
            echo json_encode(array('result' => true));
        } else {
            echo json_encode(array('result' => false));
        }
    }

    public function update()
    {
        $id = $this->input->post('id');
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $date_naissance = $this->input->post('date_naissance');

        $data = array(
            'nom' => $nom,
            'prenom' => $prenom,
            'date_naissance' => $date_naissance,
        );

        $this->Model_user->update($id, $data);
        echo json_encode(array('result' => true));
    }
}
