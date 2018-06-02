<?php

namespace JohnHearfield\Auth\Google;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use League\OAuth2\Client\Provider\Google;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class GoogleAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new Google([
            'clientId'        => $this->settings->get('johnhearfield-oauth-google.app_id'),
            'clientSecret'    => $this->settings->get('johnhearfield-oauth-google.app_secret'),
            'redirectUri'     => $redirectUri,
            'approvalPrompt'  => 'force',
            'hostedDomain'    => $this->settings->get('johnhearfield-oauth-google.app_domain'),
            'accessType'      => 'offline'
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return [
            'scope' =>
                [
                    'email',
                    'profile',
                    'https://www.googleapis.com/auth/userinfo.profile'
                ]
        ];    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail()
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getName(),
        ];
    }
}
