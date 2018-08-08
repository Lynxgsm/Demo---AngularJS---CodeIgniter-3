<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_user extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "user";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get_one($id)
    {
        return $this->db->where("id", $id)->get($this->table);
    }

    public function insert($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function delete($id)
    {
        return $this->db->where("id", $id)->delete($this->table);
    }

    public function update($id, $data)
    {
        return $this->db
            ->where("id", $id)
            ->update($this->table, $data);
    }
}
