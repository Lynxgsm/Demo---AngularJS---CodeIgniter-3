<?php

class asset_uploader
{
    public function insert_asset($path, $filetype, $file_element_name)
    {
        if ($status !== "error") {
            $config['upload_path'] = $path;
            $config['allowed_types'] = $filetype;
            $config['encrypt_name'] = true;

            $this->load->library('upload', $config);

            if (!$this->upload->do_upload($file_element_name)) {
                $status = 'error';
                $msg = $this->upload->display_errors('', '');
                return null;
            } else {
                $status = "status";
                $msg = "uploaded";
                $data = $this->upload->data();
                $fileType = pathinfo($data['file_name'], PATHINFO_EXTENSION);
                $filename = $data['file_name'];

                return $filename;
            }
        }
    }

    public function testme(){
        echo "testme";
    }
}
