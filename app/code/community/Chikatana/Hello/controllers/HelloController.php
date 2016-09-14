<?php

class Chikatana_Hello_HelloController extends Mage_Core_Controller_Front_Action
{
    public function indexAction() {
        $this->loadLayout();
        $this->renderLayout();
    }

    public function index2Action() {
        $this->loadLayout();
        $this->renderLayout();
    }

    public function infoAction() {
        $response = array(
            'name' => 'Palomino'
        );
        $this->getResponse()->clearHeaders()->setHeader('Content-type', 'application/json', true);
        $this->getResponse()->setBody(json_encode($response));
    }
}
