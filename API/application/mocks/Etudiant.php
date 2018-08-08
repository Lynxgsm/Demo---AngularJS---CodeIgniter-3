<?php

class Etudiant_mock
{
    public $id;
    public $nom;
    public $prenom;
    public $date_naissance;

    public function mock($id, $nom, $prenom, $date_naissance)
    {
        return array(
            'id' => $id,
            'nom' => $nom,
            'prenom' => $prenom,
            'date_naissance' => $date_naissance,
        );
    }
}
