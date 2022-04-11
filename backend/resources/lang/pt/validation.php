<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'O :attribute deve ser aceito.',
    'accepted_if' => 'O :attribute deve ser aceito quando :other é :value.',
    'active_url' => 'O :attribute não é um URL válido.',
    'after' => 'O :attribute deve ser uma data depois :date.',
    'after_or_equal' => 'O :attribute deve ser uma data após ou igual a :date.',
    'alpha' => 'O :attribute deve conter apenas letras.',
    'alpha_dash' => 'O :attribute deve conter apenas letras, números, traços e sublinhados.',
    'alpha_num' => 'O :attribute deve conter apenas letras e números.',
    'array' => 'O :attribute deve ser uma matriz.',
    'before' => 'O :attribute deve ser uma data antes :date.',
    'before_or_equal' => 'O :attribute deve ser uma data antes ou igual a :date.',
    'between' => [
        'numeric' => 'O :attribute deve estar entre. :min e :max.',
        'file' => 'O :attribute deve estar entre. :min e :max kilobytes.',
        'string' => 'O :attribute deve estar entre. :min e :max dígitos.',
        'array' => 'O :attribute must have between :min e :max items.',
    ],
    'boolean' => 'O campo :attribute deve ser true ou false.',
    'confirmed' => 'O :attribute confirmação não corresponde.',
    'current_password' => 'A senha é incorreta.',
    'date' => 'O :attribute não é uma data válida.',
    'date_equals' => 'O :attribute deve ser uma data igual a :date.',
    'date_format' => 'O :attribute não corresponde ao formato :format.',
    'declined' => 'O :attribute deve ser recusado.',
    'declined_if' => 'O :attribute deve ser recusado quando :other é :value.',
    'different' => 'O :attribute e :other deve ser diferente.',
    'digits' => 'O :attribute deve ter :digits dígitos.',
    'digits_between' => 'O :attribute deve estar entre. :min e :max dígitos.',
    'dimensions' => 'O :attribute tem dimensões inválidas de imagem.',
    'distinct' => 'O campo :attribute tem um valor duplicado.',
    'email' => 'O :attribute deve ser um endereço de e-mail válido.',
    'ends_with' => 'O :attribute deve terminar com um dos following: :values.',
    'enum' => 'O campo :attribute é inválido.',
    'exists' => 'O campo :attribute é inválido.',
    'file' => 'O :attribute deve ser um arquivo.',
    'filled' => 'O campo :attribute deve ter um valor.',
    'gt' => [
        'numeric' => 'O :attribute deve ser maior que :value.',
        'file' => 'O :attribute deve ser maior que :value kilobytes.',
        'string' => 'O :attribute deve ser maior que :value personagens.',
        'array' => 'O :attribute deve ter mais de :value itens.',
    ],
    'gte' => [
        'numeric' => 'O :attribute deve ser maior ou igual a :value.',
        'file' => 'O :attribute deve ser maior ou igual a :value kilobytes.',
        'string' => 'O :attribute deve ser maior ou igual a :value dígitos.',
        'array' => 'O :attribute deve ter :value itens ou mais.',
    ],
    'image' => 'O :attribute Deve ser uma imagem.',
    'in' => 'O campo :attribute é inválido.',
    'in_array' => 'O campo :attribute não existe em :other.',
    'integer' => 'O :attribute deve ser um inteiro.',
    'ip' => 'O :attribute deve ser um endereço IP válido.',
    'ipv4' => 'O :attribute deve ser um endereço IPv4 válido.',
    'ipv6' => 'O :attribute deve ser um endereço IPv6 válido.',
    'json' => 'O :attribute deve ser uma string json válida.',
    'lt' => [
        'numeric' => 'O :attribute deve ser menor que :value.',
        'file' => 'O :attribute deve ser menor que :value kilobytes.',
        'string' => 'O :attribute deve ser menor que :value dígitos.',
        'array' => 'O :attribute deve ter menos de :value itens.',
    ],
    'lte' => [
        'numeric' => 'O :attribute deve ser menor ou igual a :value.',
        'file' => 'O :attribute deve ser menor ou igual a :value kilobytes.',
        'string' => 'O :attribute deve ser menor ou igual a :value dígitos.',
        'array' => 'O :attribute não deve ter mais de :value itens.',
    ],
    'mac_address' => 'O :attribute deve ser um endereço MAC válido.',
    'max' => [
        'numeric' => 'O campo :attribute não deve ser maior que :max.',
        'file' => 'O campo :attribute não deve ser maior que :max kilobytes.',
        'string' => 'O campo :attribute não deve ser maior que :max dígitos.',
        'array' => 'O campo :attribute não deve ter mais de :max itens.',
    ],
    'mimes' => 'O :attribute deve ser um arquivo de type: :values.',
    'mimetypes' => 'O :attribute deve ser um arquivo de type: :values.',
    'min' => [
        'numeric' => 'O :attribute deve ser pelo menos :min.',
        'file' => 'O :attribute deve ser pelo menos :min kilobytes.',
        'string' => 'O :attribute deve ser pelo menos :min dígitos.',
        'array' => 'O :attribute deve ter pelo menos :min itens.',
    ],
    'multiple_of' => 'O :attribute deve ser um múltiplo de :value.',
    'not_in' => 'O campo :attribute é inválido.',
    'not_regex' => 'O formato :attribute é inválido.',
    'numeric' => 'O :attribute deve ser um número.',
    'password' => 'A senha está incorreta.',
    'present' => 'O campo :attribute deve estar presente.',
    'prohibited' => 'O campo :attribute é proibido.',
    'prohibited_if' => 'O campo :attribute é proibido quando :other é :value.',
    'prohibited_unless' => 'O campo :attribute é proibido a menos que :other é em :values.',
    'prohibits' => 'O :attribute campo proíbe: outro de estar presente.',
    'regex' => 'O format :attribute é inválido.',
    'required' => 'O campo :attribute é obrigatório.',
    'required_array_keys' => 'O campo :attribute deve conter entradas for: :values.',
    'required_if' => 'O campo :attribute é necessário quando :other é :value.',
    'required_unless' => 'O campo :attribute é necessário a menos que :other é em :values.',
    'required_with' => 'O campo :attribute é necessário quando :values é presente.',
    'required_with_all' => 'O campo :attribute é necessário quando :values estão presentes.',
    'required_without' => 'O campo :attribute é necessário quando :values não é presente.',
    'required_without_all' => 'O campo :attribute é necessário quando nenhum :values estão presentes.',
    'same' => 'O :attribute e :other deve combinar.',
    'size' => [
        'numeric' => 'O :attribute deve ter :size.',
        'file' => 'O :attribute deve ter :size kilobytes.',
        'string' => 'O :attribute deve ter :size dígitos.',
        'array' => 'O :attribute deve conter :size itens.',
    ],
    'starts_with' => 'O :attribute deve começar com um dos following: :values.',
    'string' => 'O :attribute deve ser uma string.',
    'timezone' => 'O :attribute deve ser um fuso horário válido.',
    'unique' => 'O :attribute já foi tomada.',
    'uploaded' => 'O :attribute Falha ao enviar.',
    'url' => 'O :attribute deve ser uma URL válida.',
    'uuid' => 'O :attribute deve ser um UUID válido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
